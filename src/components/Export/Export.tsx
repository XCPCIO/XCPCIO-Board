import { Loading } from '@/components/Loading';
import React from 'react';
import { debounce } from 'lodash';
import { Select, Button, Input } from 'antd';
import style from './Export.less';
const { Option } = Select;
const { TextArea } = Input;
import { getDisplayTime } from '@/utils';

class Export extends React.Component {
    contest_config: any = null;
    team: any = null;
    run: any = null;

    update(props: any) {
        this.contest_config = props.contest_config;
        this.team = props.team;
        this.run = props.run;
    }

    //在组件已经被渲染到 DOM 中后运行
    async componentWillMount() {
        this.update(this.props);
    }

    //props中的值发生改变时执行
    async componentWillReceiveProps(nextProps: any) {
        this.update(nextProps);
    }

    //组件卸载前的操作
    componentWillUnmount() {}

    state = {
        type: '',
        datFileValue: '',
        datFileGenerateLoading: false,
    };

    constructor(props: any) {
        super(props);
    }

    onChange(value: string) {
        this.setState({
            type: value,
        });
    }

    getDatFile() {
        this.setState({
            datFileGenerateLoading: true,
        });
        let datFile = '';
        datFile += `@contest "${this.contest_config.contest_name}"
@contlen ${getDisplayTime(
            this.contest_config.end_time - this.contest_config.start_time,
        )}
@problems ${this.contest_config.problem_id.length}
@teams ${Object.keys(this.team).length}
@submissions ${this.run.length}
`;
        this.contest_config.problem_id.forEach((pid: string) => {
            datFile += `@p ${pid},${pid},20,0\n`;
        });

        let { team_new_id, team_problem_submit_index } = (() => {
            let team_new_id: any = {};
            let team_problem_submit_index: any = {};
            let pos = 1;
            const initP = () => {
                return this.contest_config.problem_id.map(
                    (name: string, index: number) => {
                        return 0;
                    },
                );
            };
            for (let tid in this.team) {
                team_new_id[tid] = pos;
                ++pos;
                team_problem_submit_index[tid] = initP();
            }
            return { team_new_id, team_problem_submit_index };
        })();

        for (let tid in this.team) {
            datFile += `@t ${team_new_id[tid]},0,1,${this.team[tid].name}\n`;
        }

        this.run.forEach((run: any) => {
            let status = '';
            if (run.status === 'correct') status = 'OK';
            if (run.status === 'incorrect') status = 'WA';
            if (run.status === 'pending') status = 'PD';
            ++team_problem_submit_index[run.team_id][run.problem_id];
            datFile += `@s ${team_new_id[run.team_id]},${
                this.contest_config.problem_id[run.problem_id]
            },${team_problem_submit_index[run.team_id][run.problem_id]},${
                run.timestamp
            },${status}\n`;
        });

        this.setState({
            datFileGenerateLoading: false,
            datFileValue: datFile,
        });
    }

    render() {
        return (
            <>
                <Select
                    showSearch
                    style={{ width: 680, marginTop: 30 }}
                    placeholder="Select a type"
                    optionFilterProp="children"
                    onChange={this.onChange.bind(this)}
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="dat-file">
                        Codeforces Gym Ghosts DAT File
                    </Option>
                </Select>

                <br />
                <br />

                {this.state.type === 'dat-file' && (
                    <>
                        <TextArea
                            allowClear={true}
                            style={{ width: 680 }}
                            rows={15}
                            defaultValue={this.state.datFileValue}
                            key={this.state.datFileValue}
                            disabled={this.state.datFileGenerateLoading}
                        />
                        <br />
                        <br />
                        <Button
                            loading={this.state.datFileGenerateLoading}
                            className={style.btn}
                            type="primary"
                            size="small"
                            onClick={this.getDatFile.bind(this)}
                        >
                            Generate
                        </Button>
                    </>
                )}
            </>
        );
    }
}

export { Export };

import fs from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { createTeams } from "../src/team";

describe("team", () => {
  it("2023_ccpc_final", () => {
    const data = fs.readFileSync(resolve(__dirname, "test-data/2023_ccpc_final/team.json"));
    const teamsJSON = JSON.parse(data.toString());
    const teams = createTeams(teamsJSON);

    expect(teams[0]).toMatchInlineSnapshot(`
      Team {
        "attemptedProblemNum": 0,
        "awards": [],
        "badge": undefined,
        "coach": undefined,
        "group": [
          "official",
        ],
        "icpcID": undefined,
        "id": "3000202305140115",
        "lastSolvedProblem": null,
        "lastSolvedProblemStatistics": null,
        "location": undefined,
        "members": [
          "江骏扬",
          "罗昊",
          "辜飞云",
        ],
        "name": "前面的题目以后再来探索吧？",
        "organization": "重庆邮电大学",
        "organizationRank": -1,
        "originalRank": 0,
        "penalty": 0,
        "placeChartPoints": [],
        "problemStatistics": [],
        "problemStatisticsMap": Map {},
        "rank": 0,
        "se": 0,
        "solvedProblemNum": 0,
        "submissions": [],
        "tag": [],
      }
    `);
    expect(teams.length).toMatchInlineSnapshot("132");
    expect(JSON.stringify(teams)).toMatchSnapshot();
  });
});

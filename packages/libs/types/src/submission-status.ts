export enum SubmissionStatus {
  PENDING = "PENDING",
  WAITING = "WAITING",
  PREPARING = "PREPARING",
  COMPILING = "COMPILING",
  RUNNING = "RUNNING",
  JUDGING = "JUDGING",
  FROZEN = "FROZEN",

  ACCEPTED = "ACCEPTED",
  CORRECT = "CORRECT",
  PARTIALLY_CORRECT = "PARTIALLY_CORRECT",

  REJECTED = "REJECTED",
  WRONG_ANSWER = "WRONG_ANSWER",

  COMPILATION_ERROR = "COMPILATION_ERROR",
  PRESENTATION_ERROR = "PRESENTATION_ERROR",

  RUNTIME_ERROR = "RUNTIME_ERROR",
  TIME_LIMIT_EXCEEDED = "TIME_LIMIT_EXCEEDED",
  MEMORY_LIMIT_EXCEEDED = "MEMORY_LIMIT_EXCEEDED",
  OUTPUT_LIMIT_EXCEEDED = "OUTPUT_LIMIT_EXCEEDED",
  IDLENESS_LIMIT_EXCEEDED = "IDLENESS_LIMIT_EXCEEDED",

  HACKED = "HACKED",

  JUDGEMENT_FAILED = "JUDGEMENT_FAILED",
  CONFIGURATION_ERROR = "CONFIGURATION_ERROR",
  FILE_ERROR = "FILE_ERROR",
  SYSTEM_ERROR = "SYSTEM_ERROR",
  CANCELED = "CANCELED",
  SKIPPED = "SKIPPED",

  SECURITY_VIOLATED = "SECURITY_VIOLATED",
  DENIAL_OF_JUDGEMENT = "DENIAL_OF_JUDGEMENT",

  UNKNOWN = "UNKNOWN",
  UNDEFINED = "UNDEFINED",
}

export const SubmissionStatusToString: { [key in SubmissionStatus]: string } = {
  [SubmissionStatus.PENDING]: "Pending",
  [SubmissionStatus.WAITING]: "Waiting",
  [SubmissionStatus.PREPARING]: "Preparing",
  [SubmissionStatus.COMPILING]: "Compiling",
  [SubmissionStatus.RUNNING]: "Running",
  [SubmissionStatus.JUDGING]: "Judging",
  [SubmissionStatus.FROZEN]: "Frozen",

  [SubmissionStatus.ACCEPTED]: "Accepted",
  [SubmissionStatus.CORRECT]: "Correct",
  [SubmissionStatus.PARTIALLY_CORRECT]: "Partially Correct",

  [SubmissionStatus.REJECTED]: "Rejected",
  [SubmissionStatus.WRONG_ANSWER]: "Wrong Answer",

  [SubmissionStatus.COMPILATION_ERROR]: "Compilation Error",
  [SubmissionStatus.PRESENTATION_ERROR]: "Presentation Error",

  [SubmissionStatus.RUNTIME_ERROR]: "Runtime Error",
  [SubmissionStatus.TIME_LIMIT_EXCEEDED]: "Time Limit Exceeded",
  [SubmissionStatus.MEMORY_LIMIT_EXCEEDED]: "Memory Limit Exceeded",
  [SubmissionStatus.OUTPUT_LIMIT_EXCEEDED]: "Output Limit Exceeded",
  [SubmissionStatus.IDLENESS_LIMIT_EXCEEDED]: "Idleness Limit Exceeded",

  [SubmissionStatus.HACKED]: "Hacked",

  [SubmissionStatus.JUDGEMENT_FAILED]: "Judgement Failed",
  [SubmissionStatus.CONFIGURATION_ERROR]: "Configuration Error",
  [SubmissionStatus.FILE_ERROR]: "File Error",
  [SubmissionStatus.SYSTEM_ERROR]: "System Error",
  [SubmissionStatus.CANCELED]: "Canceled",
  [SubmissionStatus.SKIPPED]: "Skipped",

  [SubmissionStatus.SECURITY_VIOLATED]: "Security Violated",
  [SubmissionStatus.DENIAL_OF_JUDGEMENT]: "Denial Of Judgement",

  [SubmissionStatus.UNKNOWN]: "Unknown",
  [SubmissionStatus.UNDEFINED]: "Undefined",
};

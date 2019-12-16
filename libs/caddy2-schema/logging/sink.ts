
export const StandardLibLog = {
  uri: "http://caddy2-config/logging/sink",
  schema: {
    type: 'object',
    properties: {
      writer: {
        description: 'The module that writes out log entries for the sink.',
      }
    }
  }
}
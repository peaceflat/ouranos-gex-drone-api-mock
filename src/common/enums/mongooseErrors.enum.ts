export enum MONGOOSE_ERRORS {
  SERVER_ERROR = 2,
  REPLICA_SET_ERROR_START = 50,
  REPLICA_SET_ERROR_END = 59,
  LOGICAL_ERROR = 10000,
  SOCKET_RECV_ERROR = 10001,
  SOCKET_CONNECT_ERROR = 10003,
  RECOVERING_STATE_ERROR = 10004,
  NOT_MASTER_ERROR = 10005,
  NOT_ENOUGH_STORAGE_ERROR = 10107,
  DUPLICATE_KEY_ERROR = 11000,
  DUPLICATE_KEY_INDEX_ERROR = 11001,
  INTERRUPTED_OPERATION_USER = 11600,
  INTERRUPTED_OPERATION_CONNECTION_CLOSED = 11602,
  AUTHORIZATION_ERROR_START = 12000,
  AUTHORIZATION_ERROR_END = 18999,
  TRANSACTION_ERROR = 19757,
}

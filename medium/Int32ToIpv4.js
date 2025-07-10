// Int32 to IPv4
// Write a function int32ToIp(int32) that takes a 32-bit integer and returns its IPv4 address in dot-decimal notation as a string.

function int32ToIp(int32) {
  return [
    (int32 >> 24) & 255,
    (int32 >> 16) & 255,
    (int32 >> 8) & 255,
    int32 & 255,
  ].join(".");
}

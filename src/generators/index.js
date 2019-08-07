// 8-bit transfer and I/O instructions
import { generate_LD_r_from_rPrime } from './8-bit-transfer-and-io/LD_r_from_rPrime';
import { generate_LD_r_from_d8 } from './8-bit-transfer-and-io/LD_r_from_d8';
import { generate_LD_r_from_value_at_HL } from './8-bit-transfer-and-io/LD_r_from_value_at_HL';
import { generate_LD_memory_at_HL_from_r } from './8-bit-transfer-and-io/LD_memory_at_HL_from_r';
import { generate_LD_memory_at_HL_from_d8 } from './8-bit-transfer-and-io/LD_memory_at_HL_from_d8';
import { generate_LD_A_from_memory_at_BC } from './8-bit-transfer-and-io/LD_A_from_memory_at_BC';
import { generate_LD_A_from_memory_at_DE } from './8-bit-transfer-and-io/LD_A_from_memory_at_DE';
import { generate_LD_A_from_memory_at_C } from './8-bit-transfer-and-io/LD_A_from_memory_at_C';
import { generate_LD_memory_at_C_from_A } from './8-bit-transfer-and-io/LD_memory_at_C_from_A';
import { generate_LD_A_from_memory_at_a8 } from './8-bit-transfer-and-io/LD_A_from_memory_at_a8';
import { generate_LD_memory_at_a8_from_A } from './8-bit-transfer-and-io/LD_memory_at_a8_from_A';
import { generate_LD_A_from_memory_at_a16 } from './8-bit-transfer-and-io/LD_A_from_memory_at_a16';
import { generate_LD_memory_at_a16_from_A } from './8-bit-transfer-and-io/LD_memory_at_a16_from_A';
import { generate_LD_A_from_memory_at_HL_and_incr_HL } from './8-bit-transfer-and-io/LD_A_from_memory_at_HL_and_incr_HL';
import { generate_LD_A_from_memory_at_HL_and_decr_HL } from './8-bit-transfer-and-io/LD_A_from_memory_at_HL_and_decr_HL';
import { generate_LD_memory_at_BC_from_A } from './8-bit-transfer-and-io/LD_memory_at_BC_from_A';
import { generate_LD_memory_at_DE_from_A } from './8-bit-transfer-and-io/LD_memory_at_DE_from_A';
import { generate_LD_memory_at_HL_from_A_and_incr_HL } from './8-bit-transfer-and-io/LD_memory_at_HL_from_A_and_incr_HL';
import { generate_LD_memory_at_HL_from_A_and_decr_HL } from './8-bit-transfer-and-io/LD_memory_at_HL_from_A_and_decr_HL';

// 16-bit transfer instructions
import { generate_LD_rr_from_d16 } from './16-bit-transfer/LD_rr_from_d16';
import { generate_LD_SP_from_HL } from './16-bit-transfer/LD_SP_from_HL';
import { generate_PUSH_rr } from './16-bit-transfer/PUSH_rr';
import { generate_POP_rr } from './16-bit-transfer/POP_rr';
import { generate_HL_from_SP_plus_s8 } from './16-bit-transfer/LD_HL_from_SP_plus_s8';

export default [
  generate_LD_r_from_rPrime,
  generate_LD_r_from_d8,
  generate_LD_r_from_value_at_HL,
  generate_LD_memory_at_HL_from_r,
  generate_LD_memory_at_HL_from_d8,
  generate_LD_A_from_memory_at_BC,
  generate_LD_A_from_memory_at_DE,
  generate_LD_A_from_memory_at_C,
  generate_LD_memory_at_C_from_A,
  generate_LD_A_from_memory_at_a8,
  generate_LD_memory_at_a8_from_A,
  generate_LD_A_from_memory_at_a16,
  generate_LD_memory_at_a16_from_A,
  generate_LD_A_from_memory_at_HL_and_incr_HL,
  generate_LD_A_from_memory_at_HL_and_decr_HL,
  generate_LD_memory_at_BC_from_A,
  generate_LD_memory_at_DE_from_A,
  generate_LD_memory_at_HL_from_A_and_incr_HL,
  generate_LD_memory_at_HL_from_A_and_decr_HL,
  generate_LD_rr_from_d16,
  generate_LD_SP_from_HL,
  generate_PUSH_rr,
  generate_POP_rr,
  generate_HL_from_SP_plus_s8
];

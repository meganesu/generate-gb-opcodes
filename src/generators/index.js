import { generate_LD_r_from_rPrime } from './8-bit-transfer-and-io/LD_r_from_rPrime';
import { generate_LD_r_from_n8 } from './8-bit-transfer-and-io/LD_r_from_n';
import { generate_LD_r_from_value_at_HL } from './8-bit-transfer-and-io/LD_r_from_value_at_HL';
import { generate_LD_memory_at_HL_from_r } from './8-bit-transfer-and-io/LD_memory_at_HL_from_r';
import { generate_LD_memory_at_HL_from_n } from './8-bit-transfer-and-io/LD_memory_at_HL_from_n';
import { generate_LD_A_from_memory_at_BC } from './8-bit-transfer-and-io/LD_A_from_memory_at_BC';

export default [
  generate_LD_r_from_rPrime,
  generate_LD_r_from_n8,
  generate_LD_r_from_value_at_HL,
  generate_LD_memory_at_HL_from_r,
  generate_LD_memory_at_HL_from_n,
  generate_LD_A_from_memory_at_BC
];

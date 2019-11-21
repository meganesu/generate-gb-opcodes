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
import { generate_ADC_A_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/ADC_A_memory_at_HL';

// 16-bit transfer instructions
import { generate_LD_rr_from_d16 } from './16-bit-transfer/LD_rr_from_d16';
import { generate_LD_SP_from_HL } from './16-bit-transfer/LD_SP_from_HL';
import { generate_PUSH_rr } from './16-bit-transfer/PUSH_rr';
import { generate_POP_rr } from './16-bit-transfer/POP_rr';
import { generate_HL_from_SP_plus_s8 } from './16-bit-transfer/LD_HL_from_SP_plus_s8';
import { generate_LD_memory_at_a16_from_SP } from './16-bit-transfer/LD_memory_at_a16_from_SP';

// 8-bit arithmetic and logical operation instructions
import { generate_ADD_A_r8 } from './8-bit-arithmetic-and-logical-operation/ADD_A_r8';
import { generate_ADD_A_d8 } from './8-bit-arithmetic-and-logical-operation/ADD_A_d8';
import { generate_ADD_A_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/ADD_A_memory_at_HL';
import { generate_ADC_A_r8 } from './8-bit-arithmetic-and-logical-operation/ADC_A_r8';
import { generate_ADC_A_d8 } from './8-bit-arithmetic-and-logical-operation/ADC_A_d8';
import { generate_SUB_r8 } from './8-bit-arithmetic-and-logical-operation/SUB_r8';
import { generate_SUB_d8 } from './8-bit-arithmetic-and-logical-operation/SUB_d8';
import { generate_SUB_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/SUB_memory_at_HL';
import { generate_SBC_A_r8 } from './8-bit-arithmetic-and-logical-operation/SBC_A_r8';
import { generate_SBC_A_d8 } from './8-bit-arithmetic-and-logical-operation/SBC_A_d8';
import { generate_SBC_A_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/SBC_A_memory_at_HL';
import { generate_AND_r8 } from './8-bit-arithmetic-and-logical-operation/AND_r8';
import { generate_AND_d8 } from './8-bit-arithmetic-and-logical-operation/AND_d8';
import { generate_AND_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/AND_memory_at_HL';
import { generate_OR_r8 } from './8-bit-arithmetic-and-logical-operation/OR_r8';
import { generate_OR_d8 } from './8-bit-arithmetic-and-logical-operation/OR_d8';
import { generate_OR_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/OR_memory_at_HL';
import { generate_XOR_r8 } from './8-bit-arithmetic-and-logical-operation/XOR_r8';
import { generate_XOR_d8 } from './8-bit-arithmetic-and-logical-operation/XOR_d8';
import { generate_XOR_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/XOR_memory_at_HL';
import { generate_CP_r8 } from './8-bit-arithmetic-and-logical-operation/CP_r8';
import { generate_CP_d8 } from './8-bit-arithmetic-and-logical-operation/CP_d8';
import { generate_CP_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/CP_memory_at_HL';
import { generate_INC_r8 } from './8-bit-arithmetic-and-logical-operation/INC_r8';
import { generate_INC_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/INC_memory_at_HL';
import { generate_DEC_r8 } from './8-bit-arithmetic-and-logical-operation/DEC_r8';
import { generate_DEC_memory_at_HL } from './8-bit-arithmetic-and-logical-operation/DEC_memory_at_HL';

// 16-bit arithmetic operation instructions
import { generate_ADD_HL_r16 } from './16-bit-arithmetic-operation/ADD_HL_r16';
import { generate_ADD_SP_s8 } from './16-bit-arithmetic-operation/ADD_SP_s8';
import { generate_INC_r16 } from './16-bit-arithmetic-operation/INC_r16';
import { generate_DEC_r16 } from './16-bit-arithmetic-operation/DEC_r16';

// Rotate shift instructions
import { generate_RLCA } from './rotate-shift/RLCA';
import { generate_RLA } from './rotate-shift/RLA';
import { generate_RRCA } from './rotate-shift/RRCA';
import { generate_RRA } from './rotate-shift/RRA';
import { generate_RLC_r8 } from './rotate-shift/RLC_r8';
import { generate_RLC_memory_at_HL } from './rotate-shift/RLC_memory_at_HL';
import { generate_RL_r8 } from './rotate-shift/RL_r8';
import { generate_RL_memory_at_HL } from './rotate-shift/RL_memory_at_HL';
import { generate_RRC_r8 } from './rotate-shift/RRC_r8';
import { generate_RRC_memory_at_HL } from './rotate-shift/RRC_memory_at_HL';
import { generate_RR_r8 } from './rotate-shift/RR_r8';
import { generate_RR_memory_at_HL } from './rotate-shift/RR_memory_at_HL';
import { generate_SLA_r8 } from './rotate-shift/SLA_r8';
import { generate_SLA_memory_at_HL } from './rotate-shift/SLA_memory_at_HL';
import { generate_SRA_r8 } from './rotate-shift/SRA_r8';
import { generate_SRA_memory_at_HL } from './rotate-shift/SRA_memory_at_HL';
import { generate_SRL_r8 } from './rotate-shift/SRL_r8';
import { generate_SRL_memory_at_HL } from './rotate-shift/SRL_memory_at_HL';
import { generate_SWAP_r8 } from './rotate-shift/SWAP_r8';
import { generate_SWAP_memory_at_HL } from './rotate-shift/SWAP_memory_at_HL';

// Bit operation instructions
import { generate_BIT_b1_r8 } from './bit-operation/BIT_b1_r8';
import { generate_BIT_b1_memory_at_HL } from './bit-operation/BIT_b1_memory_at_HL';
import { generate_SET_b1_r8 } from './bit-operation/SET_b1_r8';
import { generate_SET_b1_memory_at_HL } from './bit-operation/SET_b1_memory_at_HL';
import { generate_RES_b1_r8 } from './bit-operation/RES_b1_r8';
import { generate_RES_b1_memory_at_HL } from './bit-operation/RES_b1_memory_at_HL';

// Jump instructions
import { generate_JP_a16 } from './jump/JP_a16';
import { generate_JP_condition_a16 } from './jump/JP_condition_a16';
import { generate_JR_s8 } from './jump/JR_s8';
import { generate_JR_condition_s8 } from './jump/JR_condition_s8';
import { generate_JP_memory_at_HL } from './jump/JP_memory_at_HL';

// Call and return instructions
import { generate_CALL_a16 } from './call-and-return/CALL_a16';
import { generate_CALL_condition_a16 } from './call-and-return/CALL_condition_a16';
import { generate_RET } from './call-and-return/RET';
import { generate_RETI } from './call-and-return/RETI';
import { generate_RET_condition } from './call-and-return/RET_condition';
import { generate_RST_t3 } from './call-and-return/RST_t3';

// General-purpose arithmetic operations and CPU control instructions
import { generate_DAA } from './general-purpose-arithmetic-operations-and-cpu-control/DAA';
import { generate_CPL } from './general-purpose-arithmetic-operations-and-cpu-control/CPL';
import { generate_NOP } from './general-purpose-arithmetic-operations-and-cpu-control/NOP';
import { generate_CCF } from './general-purpose-arithmetic-operations-and-cpu-control/CCF';
import { generate_SCF } from './general-purpose-arithmetic-operations-and-cpu-control/SCF';
import { generate_DI } from './general-purpose-arithmetic-operations-and-cpu-control/DI';
import { generate_EI } from './general-purpose-arithmetic-operations-and-cpu-control/EI';
import { generate_HALT } from './general-purpose-arithmetic-operations-and-cpu-control/HALT';
import { generate_STOP } from './general-purpose-arithmetic-operations-and-cpu-control/STOP';

export const instructionGenerators = [
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
  generate_HL_from_SP_plus_s8,
  generate_LD_memory_at_a16_from_SP,
  generate_ADD_A_r8,
  generate_ADD_A_d8,
  generate_ADD_A_memory_at_HL,
  generate_ADC_A_r8,
  generate_ADC_A_d8,
  generate_ADC_A_memory_at_HL,
  generate_SUB_r8,
  generate_SUB_d8,
  generate_SUB_memory_at_HL,
  generate_SBC_A_r8,
  generate_SBC_A_d8,
  generate_SBC_A_memory_at_HL,
  generate_AND_r8,
  generate_AND_d8,
  generate_AND_memory_at_HL,
  generate_OR_r8,
  generate_OR_d8,
  generate_OR_memory_at_HL,
  generate_XOR_r8,
  generate_XOR_d8,
  generate_XOR_memory_at_HL,
  generate_CP_r8,
  generate_CP_d8,
  generate_CP_memory_at_HL,
  generate_INC_r8,
  generate_INC_memory_at_HL,
  generate_DEC_r8,
  generate_DEC_memory_at_HL,
  generate_ADD_HL_r16,
  generate_ADD_SP_s8,
  generate_INC_r16,
  generate_DEC_r16,
  generate_RLCA,
  generate_RLA,
  generate_RRCA,
  generate_RRA,
  generate_RLC_r8,
  generate_RLC_memory_at_HL,
  generate_RL_r8,
  generate_RL_memory_at_HL,
  generate_RRC_r8,
  generate_RRC_memory_at_HL,
  generate_RR_r8,
  generate_RR_memory_at_HL,
  generate_SLA_r8,
  generate_SLA_memory_at_HL,
  generate_SRA_r8,
  generate_SRA_memory_at_HL,
  generate_SRL_r8,
  generate_SRL_memory_at_HL,
  generate_SWAP_r8,
  generate_SWAP_memory_at_HL,
  generate_BIT_b1_r8,
  generate_BIT_b1_memory_at_HL,
  generate_SET_b1_r8,
  generate_SET_b1_memory_at_HL,
  generate_RES_b1_r8,
  generate_RES_b1_memory_at_HL,
  generate_JP_a16,
  generate_JP_condition_a16,
  generate_JR_s8,
  generate_JR_condition_s8,
  generate_JP_memory_at_HL,
  generate_CALL_a16,
  generate_CALL_condition_a16,
  generate_RET,
  generate_RETI,
  generate_RET_condition,
  generate_RST_t3,
  generate_DAA,
  generate_CPL,
  generate_NOP,
  generate_CCF,
  generate_SCF,
  generate_DI,
  generate_EI,
  generate_HALT,
  generate_STOP,
];

// call each generator function
export const generateAllInstructions = () => {
  let instructions = [];

  for (let generatorFunction of instructionGenerators) {
    instructions = instructions.concat(generatorFunction());
  }
  
  return instructions; // list containing all instruction objects
};

import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  
  "type": "input_value",
  "message0": "Play TTS  %1 In channel  %2 Then %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "TTS",
      "text": "Hello!"
    },
    {
      "type": "input_value",
      "name": "In channel",
      "check": "Channel",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "align": "RIGHT"
    }
  ],
  "colour": "#49a4d1",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function(block){
    const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC);
    return `await delay(Number(${time})*1000);\n`;
};

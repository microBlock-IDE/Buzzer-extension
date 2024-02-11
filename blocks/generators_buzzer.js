function buzzerWriteFunction() {
  let board = boards.find(board => board.id === boardId);

  const _duty = board?.chip === "RP2" ? "duty_u16" : "duty";
  const _max_duty = board?.chip === "RP2" ? "65535" : "1023";

  return Blockly.Python.provideFunction_(
    'buzzerWrite',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin, freq=1000, duty=50, stop=0):',
    '  pwm = PWM(Pin(pin))',
    '  pwm.freq(freq)',
    '  pwm.' + _duty + '(int(duty / 100 * ' + _max_duty + '))',
    '  if stop > 0:',
    '    sleep(stop)',
    '    pwm.' + _duty + '(0)'
  ]);
}

Blockly.Python['tone1'] = function(block) {
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
  return code;
};

Blockly.Python['tone2'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq})\n`;
  return code;
};

Blockly.Python['no_tone'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, duty=0)\n`;
  return code;
};


Blockly.JavaScript['tone1'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_freq = Blockly.JavaScript.valueToCode(block, 'freq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `tone(${value_pin}, ${value_freq}, ${value_time} * 1000);\n`;
  return code;
};

Blockly.JavaScript['tone2'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_freq = Blockly.JavaScript.valueToCode(block, 'freq', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `tone(${value_pin}, ${value_freq});\n`;
  return code;
};

Blockly.JavaScript['no_tone'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `noTone(${value_pin});\n`;
  return code;
};


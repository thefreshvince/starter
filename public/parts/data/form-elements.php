<?php

  /**
   *  Form elements to render
   *  @var Array
   */
  $FORMELEMENTS = [
    'Input' => '<input>',
    'Input auto focus' => '<input autofocus="">',
    'Input placeholder' => '<input placeholder="placeholder">',
    'Submit' => '<input type="submit">',
    'Text' => '<input type="text">',
    'Textarea' => '<textarea></textarea>',
    'Password' => '<input type="password" placeholder="password">',
    'Radio' => '<input type="radio"><br/><input type="radio" checked="">',
    'Checkbox' => '<input type="checkbox"><br/><input type="checkbox" checked="">',
    'Select' => '<select><option></option><option>Option 1</option></select>',
    'Select Group' => '<select><optgroup label="Option group 1"><option>Option 1</option><option>Option 2</option></optgroup><optgroup><option>Option 3</option></optgroup></select>',
    'Search' => '<input type="search">',
    'File' => '<input type="file">',
    'Legend' => '<fieldset><legend>Legend</legend><label for="field">Label</label><input id="field"></fieldset>',
    'Button' => '<button>Button</button>',
    'Reset' => '<input type="reset">',
    'Email' => '<input type="email">',
    'Tel' => '<input type="tel">',
    'Url' => '<input type="url">',
    'Number' => '<input type="number"><br/><input type="number" min="0" max="15" step="3">',
    'Range' => '<input type="range"><br/><input type="range" min="0" max="15" step="3">',
    'Date' => '<input type="date">',
    'Month' => '<input type="month">',
    'Week' => '<input type="week">',
    'Time' => '<input type="time">',
    'Datetime' => '<input type="datetime"><br/><input type="datetime-local">',
    'Color' => '<input type="color"><br/><input type="color" value="#ff3d3d">',
    'Progress' => '<progress></progress><br/><progress max="100" value="22"></progress>',
    'Meter' => '<meter value="84" min="0" max="100" low="25" high="75" optimum="15"></meter>'
  ]

?>

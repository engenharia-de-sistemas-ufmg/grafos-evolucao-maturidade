import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { optionsType } from '../../../commons/types';
import 'brace/mode/json';
import 'brace/theme/textmate';
import { isValidJson, fromAceEditor, toAceEditor } from '../../../commons/json';
import * as labels from '../../../commons/labels';

const OptionsAce = ({ lang, options, update }) => {
  const [tmpOptions, setTmpOptions] = useState(toAceEditor(options));
  const [isValidOptions, validateOptions] = useState(true);
  return (
    <div>
      <button
        type="button"
        className="button is-small is-text"
        style={{ float: 'right' }}
        disabled={!isValidOptions}
        onClick={() => {
          update(fromAceEditor(tmpOptions));
        }}
      >
        {labels.update[lang]}
      </button>
      <AceEditor
        value={tmpOptions}
        mode="json"
        theme="textmate"
        name="OPTIONS_EDITOR"
        width="100%"
        tabSize={2}
        onChange={(value) => {
          setTmpOptions(value);
          validateOptions(isValidJson(value));
        }}
        editorProps={{
          $blockScrolling: Infinity,
        }}
      />
    </div>
  );
};

OptionsAce.propTypes = {
  lang: PropTypes.string.isRequired,
  options: optionsType.isRequired,
  update: PropTypes.func.isRequired,
};

export default OptionsAce;

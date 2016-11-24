/**
 * Created by Vladimir on 24/11/2016.
 */
import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {

    onEditorChange(content){
        Meteor.call('bins.update',this.props.bin,content)
    }
    render() {
        return (
            <div className="col-xs-8">
                <h5>Input</h5>
                <CodeMirror
                    value={this.props.bin.content}
                    onChange={this.onEditorChange.bind(this)}
                    options={
                    {mode: 'markdown',
                     lineNumbers: true
                    }
                }/>
            </div>
        )
    }
}

export default BinEditor;
import CodeMirror from "codemirror"

CodeMirror.defineMode('autolang', function(config) {
  const keywords = /^(?:func|class|data)\b/;
  const specialKeyword = /^(?:return|if|else)\b/
  const declarationKeywords = /^(?:val|var)\b/;
  const loopKeywords = /^(?:for|while)\b/;
  const numberType = /^(?:Int|Float)\b/;
  const classes = /^(?:String|Null|Bool|Math)\b/
  const nullable = /^(?:[a-zA-Z\d_]+\?)/
  const atoms = /^(?:true|false|null)\b/;

  return {
    startState: function() { return {}; },
    token: function(stream, state) {
      if (stream.eatSpace()) return null;

      // string (double or single)
      if (stream.match(/^(?:'([^'\\]|\\.)*'|"([^"\\]|\\.)*")/)) {
        return 'string';
      }

      // comment
      if (stream.match('//')) {
        stream.skipToEnd();
        return 'comment';
      }

      // number
      if (stream.match(/^[0-9]+(\.[0-9]+)?\b/)) {
        return 'number';
      }

      // keyword
      if (stream.match(keywords)) {
        return 'keyword';
      }

      if (stream.match(specialKeyword)) {
        return 'skeyword';
      }

      // loopKeywords
      if (stream.match(loopKeywords)) {
        return 'loop';
      }

      // declaration
      if (stream.match(declarationKeywords)) {
        return 'declaration';
      }

      // numbertype
      if (stream.match(nullable)) {
        return 'nullable';
      }

      if (stream.match(classes)) {
        return 'classes';
      }

      if (stream.match(numberType)) {
        return 'ntype';
      }

      // atom (true/false/null)
      if (stream.match(atoms)) {
        return 'atom';
      }

      // operator
      if (stream.match(/^[+\-*/=<>!]+/)) {
        return 'operator';
      }

      // identifier / variable / function name
      if (stream.match(/^[a-zA-Z_]\w*/)) {
        return 'variable';
      }

      // if nothing matched, consume one char
      stream.next();
      return 'normal';
    }
  };
});

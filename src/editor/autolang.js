import CodeMirror from "codemirror"

CodeMirror.defineMode('autolang', function(config) {
  const keywords = /^(?:if|else|return|func|class|data)\b/;
  const declarationKeywords = /^(?:val|var)\b/;
  const loopKeywords = /^(?:for|while)\b/;
  const numberType = /^(?:Int|Float)\b/;
  const atoms = /^(?:true|false|null)\b/;

  return {
    startState: function() { return {}; },
    token: function(stream, state) {
      if (stream.eatSpace()) return null;

      // comment
      if (stream.match('//')) {
        stream.skipToEnd();
        return 'comment';
      }

      // string (double or single)
      if (stream.match(/^(?:'([^'\\]|\\.)*'|"([^"\\]|\\.)*")/)) {
        return 'string';
      }

      // number
      if (stream.match(/^[0-9]+(\.[0-9]+)?/)) {
        return 'number';
      }

      // keyword
      if (stream.match(keywords)) {
        return 'keyword';
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
      return null;
    }
  };
});

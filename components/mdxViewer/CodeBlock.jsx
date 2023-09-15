import { Highlight, Prism, themes } from "prism-react-renderer";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-python");
require("prismjs/components/prism-dart");

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "plain";

  return (
    <Highlight
      theme={themes.jettwaveDark}
      code={children.trim()}
      language={language}
      prism={Prism}
    >
      {({
        // eslint-disable-next-line no-shadow
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        return (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};
export default CodeBlock;

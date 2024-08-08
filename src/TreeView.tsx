import { Fragment } from 'react/jsx-runtime';

export function TreeView(props) {
  // const elements = props.elements;
  const { elements } = props;

  return (
    <div>
      {elements.map((item) => (
        <Fragment key={item.id}>
          <div>{item.name}</div>
          {item.children ? <TreeView elements={item.children} /> : null}
        </Fragment>
      ))}
    </div>
  );
}

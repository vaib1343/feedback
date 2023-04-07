import React from 'react'


interface ListProps extends Omit<React.ComponentPropsWithoutRef<'ul'>, 'children'> {
    data: any[];
    children: (index: any) => React.ReactNode;
}

function List(props: ListProps) {
    const { data, children, ...rest } = props;
    let items = [];
    for (let i = 0; i < data.length; i++) {
        items.push(children(data[i]))
    }
    return <ul {...rest}>
        {items}
    </ul>
}

export default List
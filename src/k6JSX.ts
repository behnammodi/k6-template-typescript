function createStack() {
    let stack = [];
    let runnerId = null;

    const run = () => {
        console.log(JSON.stringify(stack))

        stack.forEach(([component, props]) => {
            component(props);
        })

        stack = [];
    }

    const push = (component, props) => {
        stack.push([component, props]);

        clearTimeout(runnerId);
        runnerId = setTimeout(run, 1);
    }

    return { push };
}

const stack = createStack();

const caller = function (component, props, children) {
    stack.push(component, props);
}

const Fragment = function () {
}

const k6JSX = { caller }

export default k6JSX;

export { Fragment };


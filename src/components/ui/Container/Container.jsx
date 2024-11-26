import cn from "classnames";

function Container({ className, children }) {
	return <div className={cn(className, "container m-auto")}>{children}</div>;
}

export default Container;

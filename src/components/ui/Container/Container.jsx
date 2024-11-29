import cn from "classnames";

function Container({ className, children }) {
	return (
		<div className={cn(className, "container m-auto px-4")}>{children}</div>
	);
}

export default Container;



type ButtonProps={
    children:React.ReactNode;
    variant?: "primary"|"danger"|"outline";
};

export function Button({children,variant="primary"}:ButtonProps){

    const variants={
        primary:"bg-black text-white",
        danger:"bg-red-600 text-white",
        outline:"border border-gray-300 bg-white text-gray-900"
    }
    return(
        <button type="button"
        className={`rounded-md px-4 py-2 text-sm font-medium ${variants[variant]}`}
        >
            {children}
        </button>
    )
}
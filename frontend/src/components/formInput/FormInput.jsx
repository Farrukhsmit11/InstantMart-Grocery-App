import { Input } from 'antd'

const FormInput = ({
    name,
    email,
    placeholder,
    className,
    type = "text",
    label,
    prefix,
    suffix,
    error,
    ...props
}) => {
    return (
        <Input
            placeholder={placeholder}
            type="text"
            className={className}
            name={name}
            status={error ? "error" : ""}
            {...props}

        >
            {error && (
                <span>{error}</span>
            )
            }
        </Input>
    )
}

export default FormInput
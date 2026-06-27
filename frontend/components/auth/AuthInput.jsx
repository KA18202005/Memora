"use client";

export default function AuthInput({

    type,

    placeholder,

    value,

    onChange

}) {

    return (

        <input

            type={type}

            placeholder={placeholder}

            value={value}

            onChange={onChange}

            className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-violet-500
                transition
            "

        />

    );

}
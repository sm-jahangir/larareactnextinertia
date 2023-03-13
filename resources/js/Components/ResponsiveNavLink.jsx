import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`navitemlink ${ active ? 'ifactiveclass' : 'notactiveclass' } text-base classlist ${className}`}>
            {children}
        </Link>
    );
}

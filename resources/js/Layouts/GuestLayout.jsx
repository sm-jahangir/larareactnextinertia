import ApplicationLogo from '@/Components/ApplicationLogo';
import GuestNavbar from '@/Components/GuestNavbar';
import MainNavbar from '@/Components/GuestNavbar';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div>
            <GuestNavbar />
            <div>
                <Link href="/">
                    <ApplicationLogo className="mx-auto d-block" width="100" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

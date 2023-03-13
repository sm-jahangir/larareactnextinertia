import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                
                                <form onSubmit={submit}>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" value={data.email} autoComplete="username" onChange={handleOnChange} />
                                        </div>
                                        {/* <InputError message={errors.email} className="mt-2" /> */}
                                        



                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" required value={data.password} autoComplete="current-password" onChange={handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" value={data.remember} onChange={handleOnChange} id="remember" />
                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                  <div className='row justify-content-center mb-3'>
                                  {errors.email && (
											<strong className='text-danger text-center'>{errors.email}</strong>
                                        )}
                                  </div>
                                    <div className="row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                            {canResetPassword && (
                                                <Link
                                                    href={route('password.request')}
                                                    className="btn btn-link"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </GuestLayout>
    );
}

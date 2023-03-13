import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                            <form onSubmit={submit}>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Name Address</label>

                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control" name="name" value={data.name} autoComplete="name" onChange={handleOnChange} required />
                                        </div>
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" value={data.email} autoComplete="username" onChange={handleOnChange} />
                                        </div>
                                        
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" required value={data.password} autoComplete="new-password" onChange={handleOnChange} />

                                        </div>
                                        
                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="password_confirmation" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password_confirmation" type="password" className="form-control" name="password_confirmation" required value={data.password_confirmation} autoComplete="new-password" onChange={handleOnChange} />

                                        </div>
                                        
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                    </div>

                                    <div className="row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                            Register
                                            </button>
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

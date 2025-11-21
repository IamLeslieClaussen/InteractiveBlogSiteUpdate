import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
    return (
        <div className="flex items-center justify h-[calc(100vh-80px)]">
            <SignIn signInUrl="/register"/>
        </div>
    )
}

export default LoginPage
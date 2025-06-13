import LoginForm from "../../../../components/loginForm";
import Navbar from "../../../../components/navbar";

export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div
      className="h-[117vh] px-12 flex items-center"
      style={{
        backgroundColor: "#020D1E",
        backgroundImage: "url('/assets/images/background/login2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlend: "overlay",
        
      }}
    >
    
      <LoginForm />
    </div>
    </>
  );
}

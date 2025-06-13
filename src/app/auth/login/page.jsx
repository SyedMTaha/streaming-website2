import LoginForm from "../../../../components/loginForm";
import Navbar from "../../../../components/navbar";


export default function LoginPage() {
  return (
    <>
      <Navbar/>
      <div
        className="h-[122vh] px-12 flex items-center relative"
        style={{
          backgroundColor: "#020D1E",
          backgroundImage: "url('/assets/images/background/login3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020D1E] via-[#020D1E]/70 to-transparent" />
        
        {/* Content with higher z-index */}
        <div className="relative z-10">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
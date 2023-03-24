import "./globals.css";
import Navbar from "@component/components/Navbar";
import { TaskProvider } from "../context/TaskContext";
import { Toaster } from "./Toaster";


export const metadata = {
  title: "Tasks App",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TaskProvider >
          <Navbar/>
          
           <div className="bg-gray-900 text-white h-[calc(100vh-4rem)]">
            <main className="h-5/6 px-28 py-10">
            {children}
            </main>
           </div>
            <Toaster/>
          
        </TaskProvider>
      </body>
    </html>
  );
}

import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="flex items-center gap-3 grid-cols-profile">
            <img src="https://github.com/DandaraVaz.png" className="w-10 h-10 rounded-full" alt="" />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Dandara Vaz</span>
                <span className="text-sm text-zinc-500 truncate">dandarapatriciovaz@gmail.com</span>
            </div>
            <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
                <LogOut className="h-4 w-4 text-zinc-500" />
            </button>
        </div>
    ) 
        
}
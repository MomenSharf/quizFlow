import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-svh w-full overflow-hidden">
        <AppSidebar />

        <SidebarInset className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          {/* Fixed header */}
          <Header />

          {/* Only this area scrolls */}
          <main className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-linear-to-br from-primary/6 via-background to-violet-500/8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
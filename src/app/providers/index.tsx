import {StoreProvider} from "./storeProvider/StoreProvider";
import {ThemeProvider} from "./themeProvider/ThemeProvider";

//оборачивает App всеми провайдерами
export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </ThemeProvider>
    )
}
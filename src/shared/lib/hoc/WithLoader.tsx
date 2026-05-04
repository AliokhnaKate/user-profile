import {useEffect, type ComponentType} from "react";

interface OptionsLoading {
  loadingText?: string;
  showSpinner?: boolean;
}

// Пропсы, которые добавляет HOC
export interface WithLoadingProps {
    loading?: boolean;
    updateLoading: (value: boolean) => void;
}

// HOC: P extends object - дженерик для пропсов оборачиваемого компонента
export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>, // Компонент, который нужно обернуть
    options: OptionsLoading = {}, // Настройки HOC (по умолчанию пустой объект)
    ): ComponentType<P & WithLoadingProps> { // Возвращаем новый компонент с доп. пропсами

          // Деструктуризация со значениями по умолчанию
    const {
        loadingText = 'Загрузка...',      // Если не передано, будет 'Загрузка...'
        showSpinner = true,               // Если не передано, будет true
    } = options; // Берём из переданных options

    // ВНУТРЕННИЙ КОМПОНЕНТ, КОТОРЫЙ ВОЗВРАЩАЕТ HOC
    function LoadingWrapper (props: P & WithLoadingProps) {
        const {loading, updateLoading, ...restProps} = props;

        useEffect(() => {
            if (loading) {
                    const timer = setTimeout(() => {
                    updateLoading(false);
                }, 1000);

                // Очистка таймера при размонтировании или изменении loading
                return () => {
                    clearTimeout(timer);
                }
            }
        }, [loading, updateLoading]);

        if (loading) {
            return (
                <div style={{ 
                        padding: '40px', 
                        textAlign: 'center',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}> {showSpinner && (
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '4px solid #f3f3f3',
                            borderTop: '4px solid #3498db',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            marginBottom: '20px'
                            }}
                        >
                        </div>
                    )}
                        <p>{loadingText}</p>
                </div>
            )
        }
        
        return <WrappedComponent {...restProps as P} />;
    }

    return LoadingWrapper; // Возвращаем новый компонент
}
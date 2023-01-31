import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';

interface BugButtonProps {
  className?: string,
}

export const BugButton = () => {
    const [error, setError] = useState(false);

    const toggleError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            onClick={toggleError}
        // eslint-disable-next-line i18next/no-literal-string
        >
            Error
        </Button>
    );
};

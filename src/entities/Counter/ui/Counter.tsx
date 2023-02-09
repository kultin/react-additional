import { t } from 'i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const addHandler = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incrementHandler}>{t('increment') as string}</Button>
            <Button data-testid="decrement-btn" onClick={decrementHandler}>{t('decrement') as string}</Button>
            <Button data-testid="decrement-btn" onClick={addHandler}>{t('add') as string}</Button>
        </div>
    );
};

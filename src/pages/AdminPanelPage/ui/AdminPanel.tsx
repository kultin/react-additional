import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AdminPanelPage">
            <div>{t('Admin panel')}</div>
        </Page>
    );
};

export default AdminPanelPage;

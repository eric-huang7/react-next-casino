import {Stack} from "@chakra-ui/react";
import SelectField from "../form/SelectField";
import {useState} from "react";
import {featuresOptions, sortOptions, volatilityOptions} from "../../envs/gameFilters";
import {useTranslation} from "next-i18next";

const SelectFilter = ({children, ...props}) => <SelectField color="white" bg="rgba(120, 34, 1, 0.85)" {...props}>
    {children}
</SelectField>

const GamesFilterMenu = ({...props}) => {
    const {t} = useTranslation('common');
    const [sort, setSort] = useState();
    const [feature, setFeature] = useState();
    const [volatility, setVolatility] = useState();

    return (
        <Stack
            w="100%"
            direction={{base: 'column', lg: 'row'}}
            justifyContent="space-between"
            alignItems="center"
            {...props}
        >
            <SelectFilter value={sort} name="sort" onChange={setSort} placeholder={t('filters.sort.placeholder')}>
                {sortOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={feature} name="feature" onChange={setFeature} placeholder={t('filters.features.placeholder')}>
                {featuresOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={volatility} name="feature" onChange={setVolatility} placeholder={t('filters.volatility.placeholder')}>
                {volatilityOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
        </Stack>
    )
}

export default GamesFilterMenu;
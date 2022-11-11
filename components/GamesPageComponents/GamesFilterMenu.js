import {Stack} from "@chakra-ui/react";
import SelectField from "../form/SelectField";
import {useState, useEffect} from "react";
import {featuresOptions, sortOptions, volatilityOptions, linesOptions, reelsOptions, providersOptions} from "../../envs/gameFilters";
import {useTranslation} from "next-i18next";

export const SelectFilter = ({children, ...props}) => <SelectField
    color="white"
    h="60px"
    w={{base: '100%', lg: undefined}}
    fontWeight={500}
    bg="rgba(120, 34, 1, 0.85)"
    border={{base: "0 solid", lg: "2px solid"}}
    borderBottom={{base: "1px solid", lg: "2px solid"}}
    focusBorderColor={{base: "rgba(199, 108, 74, 0.6)", lg: "#601B00"}}
    borderColor={{base: "rgba(199, 108, 74, 0.6)", lg: "#601B00"}}
    borderBottomColor={{base: "rgba(199, 108, 74, 0.6)", lg: "#601B00"}}
    borderRadius={{base: 0, lg: "6px"}}
    textTransform={{base: "uppercase", lg: "none"}}
    sx={{ '& option': {bg: 'rgba(120, 34, 1, 0.9)'}, fontSize: '18px'}}
    _hover={{borderColor: {base: "rgba(163, 48, 0, 0.96)", lg: "#601B00 !important"}}}
    {...props}>
    {children}
</SelectField>

const GamesFilterMenu = ({...props}) => {
    const {t} = useTranslation('common');
    const [sort, setSort] = useState();
    const [feature, setFeature] = useState();
    const [volatility, setVolatility] = useState();
    const [lines, setLines] = useState();
    const [reels, setReels] = useState();
    const [providers, setProviders] = useState();

    useEffect(() => {
        
    }, [sort, feature, volatility, lines, reels, providers]);

    return (
        <Stack
            w="100%"
            direction={{base: 'column', lg: 'row'}}
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={{base: 0, lg: 2}}
            p={0}
            {...props}
        >
            <SelectFilter value={sort} name="sort" onChange={setSort} placeholder={t('filters.sort.placeholder')}>
                {sortOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={feature} name="feature" onChange={setFeature} placeholder={t('filters.features.placeholder')}>
                {featuresOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={volatility} name="volatility" onChange={setVolatility} placeholder={t('filters.volatility.placeholder')}>
                {volatilityOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={lines} name="lines" onChange={setLines} placeholder={t('filters.lines.placeholder')}>
                {linesOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={reels} name="reels" onChange={setReels} placeholder={t('filters.reels.placeholder')}>
                {reelsOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
            <SelectFilter value={providers} name="providers" onChange={setProviders} placeholder={t('filters.providers.placeholder')}>
                {providersOptions.map(item => <option key={item.key} value={item.key}>{t(item.label)}</option>)}
            </SelectFilter>
        </Stack>
    )
}

export default GamesFilterMenu;
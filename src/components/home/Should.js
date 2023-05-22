import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Button } from '../Button';

export const Should = () => {
    return (
        <div className='why-should'>
            <div className='col-6'>
                <h1>Why should you have a cat?</h1>
                <p>
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                </p>
                <Button
                    variant='text'
                    text='read more'
                    endIcon={<TrendingFlatIcon />}
                />
            </div>
            <div className='row'>
                <div className='col-6 f-end'>
                    <img
                        className='img-demo-1'
                        src='https://s3-alpha-sig.figma.com/img/aab6/9287/2c4d929be0dbd9efe5e7dabd4bb08ac7?Expires=1685318400&Signature=ArMl0iCb~7eAoxE9Ub9EctJL30i30lI871UTgclmZo-0b6ac~WKFBRGn~ovj71lmdsDU7jbZAmxgt--r2zyrRWow~FG28uto3nWOjI4h4g4IUDuNd54FBLoP54TyAUNhNPRgJDGyaIsp60cQt70wvlH3fAj8yL2kfPdW3zbFZKT3~eDlJOjhoZc1KIhB-Vlty41YvSzRAQK28yK0eBU5jw5fhp~PePWS~MynlliJpsZ5nsYBk~cNlZYoAe8zvEAALsLhSHYbJ9lGmh2PZcEnLbLzqDZu2EoqjJNDKHUJlp9flboPiWhEDJqbfCtF~FIM0lSvSyPIMvJF63Pzbn~zVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt=''
                    />
                    <img
                        className='img-demo-2'
                        src='https://s3-alpha-sig.figma.com/img/67f4/a6fd/8e772f937cf9ff7fca1e81286456f193?Expires=1685318400&Signature=E50fgCU2AL0XpVwu7TLhToVnQJmN9UceO1BtmAuw8cKH2fhcO2W1W59xU4QbLpUH64tXlb5OCGHNB7yrW5Ciw-a0YKuQk9ndD8Tf4UF8CV0lAhbqYVFqWeniWErI3pJMd0Vf~zMvstsRsWUSbCOqXoBejHmYOng2qDRA3CmfwhQAw0tz-RS~QbygKoS5w8wB5-JTOOAlf3XRZ-2WCBgnJkuk1BMyvS96fuWQPxAUHUOIuf1a3CBwOYqsbv2954HbqGYR4MbdMlVx1y7mQAqOF4Xr13tK907oCNg1zwk2oRmnOOvxUKd-YtSpjkJd-BvuyfAJAHQX2hZiYKG-oA0IUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt=''
                    />
                </div>
                <div className='col-6 f-end'>
                    <img
                        className='img-demo-3'
                        src='https://s3-alpha-sig.figma.com/img/dad1/068a/80c9cd0e261de43071ed2be676b7b1cd?Expires=1685318400&Signature=KW82utvAkZoGw9AeQyi0BQ6NbWWuIDdHMiSGOxnl4Osp9amIitvlWbdmi5LqONl-Jk4RAOwcGvI4gmAcbPi-R-Jvg9IBJj1q0C3VaKTACC456GiupSSCwV-v0hpEajffkXPMWbNr-v-gAXhvpJ-uB4-CGAzgpTN5jr4pN0-InvImnR-URGNH7Gm68ow5oxpNh8N4hjvJV2gfL-24nlMKobdan4bYw~znhowrblKV2ukxfMG3FLav21xvvR9Fqrp6XpgOdEeqTiNL3m4I~SzJZ5ZcZ3zyDY9-HRSSc4Zovuu6VCPB1PW2oE4CMpa~ZTxMcTCm0nC0ZsgoNs~2yYzaCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

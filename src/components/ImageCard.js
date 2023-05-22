export const ImageCard = ({ title }) => {
    return (
        <div className='img-card'>
            <img src='https://s3-alpha-sig.figma.com/img/d98b/e6d2/5adeec61af9e8139176bef6da50ea692?Expires=1685318400&Signature=ludTxPtXtoKmqzR7VsdJj0yVJGN2-ZwZ3J3TdM8ZrY1vn2hl9oPWyl-L1dV-Eg-BUpyVdtjPZk8a2p8wHAkXbqA4GiOz-dEdzs14NeE3FEXHgIcFmlOMIowBtpVE4Uyxm4bS9GTZZ4KDacHD8gdnVGrJEMh6ElzPMYD1xkz-~px98AIOErIQ83D41bQvSJikcWmUtyLgd5q5hutjfxpQugTYjH8nLJwwFoTXnkFQByHb28QUIpRRBdGW~bzwXlNfTOsIzEJ2dSS-~3R7M55ulQvFCpTudP~NGNzVrzctULGafhBP~VFjaQeNVM~zgnwQ8uUzvjqpEbg6tmdh3cILvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
            {title && <p>{title}</p>}
        </div>
    );
};

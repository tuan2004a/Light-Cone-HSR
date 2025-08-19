import React, { useState } from "react";

const useOpenBgCard = () => {
    const [isOpenBgCard, setIsOpenBgCard] = useState(false);
    const handleOpenBgCard = () => setIsOpenBgCard(true);
    const handleClostBgCard = () => setIsOpenBgCard(false);

    return {
        isOpenBgCard, setIsOpenBgCard,
        handleOpenBgCard,
        handleClostBgCard
    }
}

export default useOpenBgCard
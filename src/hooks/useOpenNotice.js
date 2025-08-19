import { useState } from "react";

const useOpenNotice = () => {
    const [isOpenNoticeCard, setIsOpenNoticeCard] = useState(false);
    const handleOpenNotices = () => setIsOpenNoticeCard(true)
    const handleCloseNotices = () => setIsOpenNoticeCard(false);

    return {
        isOpenNoticeCard, setIsOpenNoticeCard,
        handleOpenNotices, handleCloseNotices
    }
}

export default useOpenNotice
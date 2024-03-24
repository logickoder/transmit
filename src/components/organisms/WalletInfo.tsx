export default function WalletInfo({address}: WalletInfoProps) {
    return (
        <div className="flex flex-row gap-2 items-center justify-center p-2 border border-neutral-60 rounded-xl">
            <WalletIcon/>
            <p className="text-sm text-neutral-300">{address}</p>
        </div>
    )
}

function WalletIcon() {
    return (
        <div className="w-4 h-4 inline-block rounded-[50%] overflow-hidden">
            <svg x="0" y="0" width="16" height="16">
                <rect x="0" y="0" width="16" height="16"
                      transform="translate(-1.11502252934793 -0.4117558105800983) rotate(311.6 8 8)"
                      fill="#18BBF2"></rect>
                <rect x="0" y="0" width="16" height="16"
                      transform="translate(-3.963294530945828 -6.932912587625862) rotate(291.0 8 8)"
                      fill="#2382E1"></rect>
                <rect x="0" y="0" width="16" height="16"
                      transform="translate(7.926277882206957 10.321371083952146) rotate(221.0 8 8)"
                      fill="#018E7E"></rect>
            </svg>
        </div>
    )
}

type WalletInfoProps = {
    address: string;
}
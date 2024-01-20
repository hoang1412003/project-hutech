import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    function disconnectWallet() {
        disconnect();
        setIsProfileDropdownOpen(false);
    }

    return (
        <div className={styles.container}>
            <Link className={styles.logo} href ="/"><img src={`https://imagedelivery.net/-PpJW2zWoXKuJUlA_UK6Vg/c3f676c1-29d2-4ae4-d9c8-fb4e604f2500/large`}></img></Link>
           
           <div className={styles.title_nav}>
            TRADING MARKET
           </div>
                
            <div className={styles.navbar}>
                <Link className={styles.home} href ="/">Home</Link>
                <Link className={styles.home} href ="/marketplace">Trade</Link>
                <div>
                     {!address ? (
                        <ConnectWallet 
                            btnTitle="Log in"
                            theme="light"
                            className={styles.connectWalletBtn}
                        />
                    ) : (
                        <div onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                            <img src={`https://cdn-icons-png.flaticon.com/128/1144/1144760.png`} alt="avatar" className={styles.avatar}/>
                        </div>
                    )}
                </div>
                {isProfileDropdownOpen && (
                    <div className={styles.profileDropdown}>
                        <Link className={styles.myCards} href="/myCards">
                            <img src={`https://cdn-icons-png.flaticon.com/128/9288/9288312.png`} className={styles.cards}/>
                            <p>My Items</p>
                        </Link>
                        <button className={styles.logout}
                            onClick={disconnectWallet}
                        >
                            <img src={`https://cdn-icons-png.flaticon.com/128/1828/1828479.png`} className={styles.icon}/>Log out</button>
                    </div>
                )}
            </div>
        </div>
    )
}
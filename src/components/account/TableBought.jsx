import React from 'react';
import styles from './TableBought.module.css';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

//Follow table element accessibility guidelines - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table or https://usability.yale.edu/web-accessibility/articles/tables#:~:text=HTML%20tables%20are%20appropriate%20for,%2C%20column%20headers%2C%20or%20both.

export const TableBought = () => {

    const accountAssets = useSelector(selectAccountAssets);

    return (
        <div className={styles.container}>
            <table className={styles.table} id='xyz'> 
                <thead className={styles.tableHead}>
                    <tr className={styles.headerContainer}>
                        <th className={styles.companyHeader}>Company</th>
                        <th className={styles.companyHeader}>Type</th>
                        <th className={styles.companyHeader}>Total Value</th>
                        <th className={styles.companyHeader}>Total Gain/Loss</th>
                        <th className={styles.companyHeader}>Price</th>
                        <th className={styles.companyHeader}>Today's Gain/Loss</th>
                        <th className={styles.companyHeader}>Cost Basis</th>
                        <th className={styles.companyHeader}>Initial Confidence</th>
                        <th className={styles.companyHeader}>{/*Actions*/}</th>
                    </tr>
                </thead>
                <TableBody />
                {/*<tbody>
                    {accountAssets ? <TableRow ticker={accountAssets[0].ticker} logo={accountAssets[0].logo} confidenceLevel={accountAssets[0].confidenceLevel} stockOrOptions={accountAssets[0].stockOrOptions}/> : <div>test</div>}
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>Stock</td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                    <tr className={styles.tableStructure}>
                        <td className={styles.companyInfo}>
                            <img className={styles.logo} src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
                            <div>GOOGL</div>
                        </td>
                        <td>$2,000</td>
                        <td>-15%</td>
                        <td>$350</td>
                        <td>-5%</td>
                        <td>$400</td>
                        <td>9/10</td>
                        <td>
                            <button>Details</button>
                        </td>
                    </tr>
                </tbody>*/}
            </table>
        </div>
    )
}
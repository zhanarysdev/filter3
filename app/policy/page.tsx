'use client'
import { PageWrapper } from "@/components/page-wrapper";
import { Title as GTitle } from "@/components/title";
import { Text as GText } from "@/components/text";
import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => <h2 className="text-[22px] leading-[26px] mt-[16px] font-bold">{children}</h2>
const SubTitle = ({ children }: { children: ReactNode }) => <h4 className="font-bold text-[14px] mt-[12px] leading-[18px]">{children}</h4>
const Text = ({ children }: { children: ReactNode }) => <p className="text-[14px] leading-[18px] mt-[8px]">{children}</p>

export default function Policy() {
    return <PageWrapper>
        <GTitle data={'Privacy Policy'} />
        <div className="mt-[8px]">
            <GText data="In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner. For more information and to understand your rights, you can also view the complete version of this privacy policy, by clicking the link at the bottom right of this page." />
        </div>
        <div>
            <Title>Privacy Policy of www.filter.li</Title>
            <Text>Privacy Policy of www.filter.li
                In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.
                For more information and to understand your rights, you can also view the complete version of this privacy policy, by clicking
                the link at the bottom right of this page.</Text>
            <Title>Owner and Data Controller</Title>
            <Text>Filter LLC - Bukhar Zhirau boulevard 27/5, Block 1, 23 floor, office 577, Almaty, Kazakhstan, 050021</Text>
            <Text><b>Owner contact email:</b> community@filter.li</Text>
            <Title>Types of Data collected</Title>
            <Text>The owner does not provide a list of Personal Data types collected.</Text>
            <Text>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by
                specific explanation texts displayed prior to the Data collection.
                Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
                Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it
                impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not
                mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the
                Service.
                Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
                Any use of Cookies – or of other tracking tools — by this Application or by the owners of third-party services used by this
                Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the
                present document and in the Cookie Policy.</Text>
            <Text>
                Users are responsible for any third-party Personal Data obtained, published or shared through this Application.
            </Text>
            <Title>Mode and place of processing the Data</Title>
            <SubTitle>Methods of processing</SubTitle>
            <Text>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized
                destruction of the Data.
                The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes
                strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of
                persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration)
                or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies,
                communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be
                requested from the Owner at any time.</Text>
            <SubTitle>Place</SubTitle>
            <Text>The Data is processed at the Owner&apos;s operating offices and in any other places where the parties involved in the processing are
                located.</Text>
            <Text>Depending on the User&apos;s location, data transfers may involve transferring the User&apos;s Data to a country other than their own. To
                find out more about the place of processing of such transferred Data, Users can check the section containing details about the
                processing of Personal Data.</Text>
            <SubTitle>
                Retention time
            </SubTitle>
            <Text>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose
                they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.</Text>

            <Title>Cookie Policy</Title>
            <Text>This Application uses Trackers. To learn more, Users may consult the Cookie Policy.</Text>
        </div>
    </PageWrapper>
}
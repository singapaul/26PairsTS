import React, { useEffect, useState } from 'react'
import { BaseModal } from './BaseModal'

import getCurrentDate from '../../../utils/getCurrentDate'
export const TACModal = ({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) => {
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const date = getCurrentDate()
    setDate(date)
  }, [])

  return (
    <BaseModal
      title="Terms and Conditions"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div className="h-fit-content w-full h-full overflow-y-scroll text-sm text-gray-500 dark:text-gray-300 text-left">
        <h1>THE 26 PAIRS COMPANY LIMITED Privacy Policy</h1>

        <h2>Our contact details</h2>
        <p>
          <strong>Name:</strong> DATA PROTECTION OFFICER
          <br />
          <strong>Address:</strong> C/O DSG, 4TH FLOOR, CASTLE CHAMBERS, 43
          CASTLE STREET,
          <br />
          LIVERPOOL, L2 9TL
          <br />
          <strong>Phone Number:</strong> 08445442365
          <br />
          <strong>E-mail:</strong>{' '}
          <a href="mailto:info@26pairs.com">info@26pairs.com</a>
        </p>

        <h2>The type of personal information we collect</h2>
        <p>We currently collect and process the following information:</p>
        <ul>
          <li>
            Personal identifiers, contacts and characteristics (for example,
            name and contact details) that may be requested from time to time.
          </li>
          <li>The IP address of your device(s) used to play the games.</li>
        </ul>

        <h2>How we get the personal information and why we have it</h2>
        <p>
          Most of the personal information we process is provided to us directly
          by you for one of the following reasons:
        </p>
        <ul>
          <li>
            To Register for any services or games that require your personal
            information so we can be sure your identity is kept confidential.
          </li>
          <li>
            We may need to take financial data belonging to you, to allow us to
            process applications and subscriptions and purchases you wish to
            achieve.
          </li>
          <li>
            We may collect personal images for you to use in creating a
            personalized version of our games as you may choose to purchase.
          </li>
        </ul>
        <p>
          We use the information that you have given us in order to PROVIDE YOU
          PROTECTION AND ACCURACY IN IDENTIFYING YOU.
        </p>
        <p>
          We may share this information with relevant and necessary suppliers or
          financial service operators such as banks and payment operators.
        </p>
        <p>
          Under the UK General Data Protection Regulation (UK GDPR), the lawful
          bases we rely on for processing this information are:
        </p>
        <ol>
          <li>
            Your consent. You are able to remove your consent at any time. You
            can do this by contacting us on{' '}
            <a href="mailto:info@26pairs.com">info@26pairs.com</a>.
          </li>
          <li>We have a contractual obligation.</li>
          <li>We have a legal obligation.</li>
          <li>We have a vital interest.</li>
          <li>We need it to perform a public task.</li>
          <li>We have a legitimate interest.</li>
        </ol>

        <h2>How we store your personal information</h2>
        <p>Your information is securely stored and is entirely digital.</p>
        <p>
          We keep the data collected for the necessary period as advised by the
          ICO and in line with GDPR. We will then dispose your information by
          deleting the digital data.
        </p>

        <h2>Your data protection rights</h2>
        <p>Under data protection law, you have rights including:</p>
        <ul>
          <li>
            Your right of access - You have the right to ask us for copies of
            your personal information.
          </li>
          <li>
            Your right to rectification - You have the right to ask us to
            rectify personal information you think is inaccurate. You also have
            the right to ask us to complete information you think is incomplete.
          </li>
          <li>
            Your right to erasure - You have the right to ask us to erase your
            personal information in certain circumstances.
          </li>
          <li>
            Your right to restriction of processing - You have the right to ask
            us to restrict the processing of your personal information in
            certain circumstances.
          </li>
          <li>
            Your right to object to processing - You have the right to object to
            the processing of your personal information in certain
            circumstances.
          </li>
          <li>
            Your right to data portability - You have the right to ask that we
            transfer the personal information you gave us to another
            organization, or to you, in certain circumstances.
          </li>
        </ul>

        <h2>How to complain or make a request</h2>
        <p>
          If you have any concerns about our use of your personal information,
          you can make an inquiry or raise a complaint to us at{' '}
          <a href="mailto:info@26pairs.com">info@26pairs.com</a>, or C/O DSG.
          4th Floor, Castle Chambers, 43 Castle Street, Liverpool, L2 9TL
        </p>
        <p>
          You are not required to pay any charge for exercising your rights. If
          you make a request, we have one month to respond to you.
        </p>
        <p>
          You can also complain to the ICO if you are unhappy with how we have
          used your data. The ICO's address:
        </p>
        <p>
          Information Commissioner's Office
          <br />
          Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
          <br />
          Helpline number: 0303 123 1113
          <br />
          ICO website:{' '}
          <a href="https://www.ico.org.uk">https://www.ico.org.uk</a>
        </p>

        <p>Date: {date}</p>
      </div>
    </BaseModal>
  )
}

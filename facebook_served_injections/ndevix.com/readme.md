So this one is creepy even for a creepy category.

1. Visit <a href="http://www.ndevix.com">ndevix.com</a>, which has no https version.


2. On our visit, browser loads to version of the same facebook connect javascript during this visit: 

  a) <a href="https://s-static.ak.facebook.com/connect/xd_arbiter/xRlIuTsSMoE.js?version=41">https version</a>, from IP 104.69.60.133
  
  b) <a href="http://s-static.ak.facebook.com/connect/xd_arbiter/xRlIuTsSMoE.js?version=41">http version</a>, from IP 
  

3. Both of these IPs don't actually show rDNS entries for for facebook.com but rather appear to be akamai-controlled IPs: here's the <a href="https://www.robtex.com/en/advisory/ip/88/221/14/121/">88.221.14.121 robtex report</a>, which has rDNS of "a88-221-14-121.deploy.akamaitechnologies.com" and here's the <a href="https://www.robtex.com/en/advisory/ip/104/69/60/133/">104.69.60.133 robtex report</a>, which has rDNS "a104-69-60-133.deploy.static.akamaitechnologies.com."


4. Does facebook really use "akamaitechnologies.com" as a CDN for their in-house javascript? 


5. When we pull the cert trust chain (archived <a href="https://github.com/cryptostorm/CorruptorInjectorNetworks/tree/master/facebook_served_injections/ndevix.com/certs">in this directory</a> as-captured), the <a href="https://github.com/cryptostorm/CorruptorInjectorNetworks/blob/master/facebook_served_injections/ndevix.com/certs/s-static.ak.facebook.com.crt">leaf cert</a> claims to be authoritatively issued to "s-static.ak.facebook.com" and makes no mention (nor even as an Subject Alternative Name (SAN, i.e. "DNS name) of anything to do with akamaitechnologies.com... which, at the very least, means the certificate is fraudulent since it's sitting on an IP address that is not facebook.com's and makes no mention of facebook.com in any of it's RIPE/ARIN published records. No extended validation, nothing.


6. We leave it to the reader to review the rest of the cert trust chain to see if it holds up to scrutiny, or not. Let's say, were were betting folks, we'd bet there's perhaps some loose ends in there.


7. The oldest DNS records Robtex has <a href="https://www.robtex.com/en/advisory/dns/com/akamaitechnologies/deploy/a88-221-14-121/">on file for 88.221.14.121</a> (well, technically for "a88-221-14-121.deploy.akamaitechnologies.com" but per Robtex that hostname has only ever been associated with 88.221.14.121, so same difference) date back only to Mon Jun 29 01:43:25 2015... so maybe this is just a new IP address for akamaitechnologies.com, err facebook.com, err - whatever/whoever claims to be serving up these packets and the javascript they contain.


8. Lo and behold, when we do the same DNS association analysis for 104.69.60.133, we get the <a href="https://www.robtex.com/en/advisory/dns/com/akamaitechnologies/static/deploy/a104-69-60-133/">exact same 1st record date</a>: Mon Jun 29 01:43:25 2015. Down the hour, minute, and second. Wow, ok - military precision in IP address rDNS/A Record submissions on the part of akamaitech... whoever is the actual entity behind these IPs.


9. Ah, but then when we actually visit (with scripts turned off, of course) the page <a href="https://s-static.ak.facebook.com/connect/xd_arbiter/xRlIuTsSMoE.js?version=41">https://s-static.ak.facebook.com/connect/xd_arbiter/xRlIuTsSMoE.js?version=41</a> with a browser (chrome), we get this utterly bizarre message: 

  SECURITY WARNING: Please treat the URL above as you would your password and do not share it with anyone.
  
  See the <a href="http://l.ak.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&h=JAQGhW7IO&s=1">Facebook Help Center</a> for more information.


10. The link to the "<a href="http://l.ak.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&h=JAQGhW7IO&s=1">Facebook Help Center</a>" - http<colon_dash_dash>l.ak.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&h=JAQGhW7IO&s=1 - it doesn't resolve (<i>"The server at l.ak.facebook.com can't be found, because the DNS lookup failed"</i>). Indeed, it' supremely odd that this "Facebook Help Center" would have an http link to it published by (the real) facebook. 


11. Point virustotal.com at the https version of the file, and you get <a href="https://www.virustotal.com/en/url/3b4132f1e8e894792f87029f56f9eb667e18c9a2470364e11cb2f62fd66fd6b7/analysis/1436702009/">this tidy report</a>... for IP address 23.72.60.117. Which isn't either of the two we've been receiving packets from, earlier. The <a href=https://www.robtex.com/en/advisory/ip/23/72/60/117/">Robtex report</a> on <i>this</i> IP address shows yet another rDNS entry for akamaitechnologies: "a23-72-60-117.deploy.static.akamaitechnologies.com" - of course, akamai is a big CDN and has a bunch of IPs, so that's not really a red flag. But it's sort of odd how these IPs seem to be stick to specific pages and specific subhosts only, sort of. A little bit. Virustotal says the response content of the page - SHA256 value 060486394bf12c6ca33e1df0b2ebf95f7de5b9768cae4775e8b506dcf10d47f0 - is clean, for whatever that's worth given the delivery channel variability. And the three versions we've captured and posted here, while not exactly identical, seem close enough to each other (with variance only in the last few hundred bytes, apparently) to be innocuous... right? But they're not identical - and they don't match what the headers say is the <i>expected</i> content length, not even close. 


12. A run of <a href="https://ssllabs.com">Ivan's SSL-labs.com testing tool</a> against the https version of the page s-static.ak<dot>facebook<dot>com/connect/xd_arbiter/xRlIuTsSMoE.js?version=41 turns up <a href="https://www.ssllabs.com/ssltest/analyze.html?d=s-static.ak.facebook.com&latest">responses via https</a> from exactly two IP addresses: 23.203.57.18 and 23.203.185.60 - with the former claiming to be associated with the https://www version of the page, and the latter the https:// with no www prefix. Neither is the same one Virustotal got - 23.72.60.117 - nor what we received initially - 104.69.60.133. Of course, each of these lookups is from different machines and thus a CDN like Akamai will find close cached copies of resoures and server them up as appropriate. Whether that's what's going on here, or not, an analyst with more available time than us (and patience) will have to ascertain. 


13. These two IPs both get "B" ssl grades from Ivan. 


14. Sucuri.net, when asked to review the same URL as we've been looking at - s-static.ak<dot>facebook<dot>com - <a href="https://sitecheck.sucuri.net/results/s-static.ak.facebook.com">can't scan</a> and reports a 404 (they are checking just the index directory, as it were, not the specific URL... so in theory all the variability of the exact URL we've been looking at could be specific to that specific URL within this specific hostname - which seems obscurely impractical as an explanation, but we can't rule it out thus far, in formal terms). Specifically:

  Unable to properly scan your site. Site returning error (40x): HTTP/1.1 403 Forbidden - Unable to properly scan your site. Site empty (no content): Content-Length: 0
  
15. Then again, apparently they get a reported hostname for IP address 23.78.178.110 (yet another different 23 a-block IP address) of "s-static.ak.facebook.com"... no akamaitechnologies.com whatsoever. Apart from not getting any reply - well, getting a reply of "FOAD" and no content, to be precise - Sucuri reports the site is just fine, no problems at all. Which is quite a leap of faith for a 403'd site, but there you go.


16. Search google for the first line of the <a href="https://github.com/cryptostorm/CorruptorInjectorNetworks/blob/master/facebook_served_injections/ndevix.com/certs/s-static.ak.facebook.com.crt">pem-encoded leaf cert</a> for the version of the https page we captured directly (per above) - 060486394bf12c6ca33e1df0b2ebf95f7de5b9768cae4775e8b506dcf10d47f0 - and you get nothing, no matches. This is a technique we've used previously to track down copies of certs in the wild, and though not proof of anything does highlight when a certificate that is in theory being used across a widely-accessed resource, in fact seems to be invisible outside our specific session. Which is, in such cases, and to speak bluntly: creepy, or fishy, or spooky. Dodgy, basically. 


17. Search google for the 'fingerprints' (i.e. hash values of the pem-encoded cert) of the leaf cert we received from the https page... well wait, first we should mention that the leaf cert we received - SHA1 23B719B5A410D3AC80AEB5F4A25ADF4CC827F708 - doesn't hash to the same 'print as the one ssllabs.com gets - which is SHA1 7bcc9a75a559fb4ef257dea0d1b1a5baf6db6ca6. The cert Ivan's site gets (the latter) has no google hits on its SHA1 print, and the one we got pulls one page of <a href="https://www.google.fr/search?q=23B719B5A410D3AC80AEB5F4A25ADF4CC827F708&oq=23B719B5A410D3AC80AEB5F4A25ADF4CC827F708">google results</a>... and, well, do the search yourself and see what comes back. It's better that way (hint: not what's expected for a routine facebook subdomain leaf cert). Does that "prove" anything? Well, no... but it's certainly begging some explanation.


18. The entire cert trust chain pulled by Ivan's site is - surprise, surprise - signed by SHA1 hash function. Every cert. Imagine the coincidence! Well, ok... that's not entirely unusual (it's why these servers got a "B" grade, btw, from Ivan) - but it's certainly not expected for a world-class CDN such as Akamai... or akamaitechnologies.com... or whatever the hell is serving up these certs.



Naturally, any competent analysis will require full pcap capture and bit-by-bit analysis of the sessions and packets involved... and frankly to do that for every incident of prospective injection would turn into something well past Herculean workload. 

For what it's worth, some on the cryptostorm team have seen enough of these "facebook" dodgy javascript (and css, and svg) loads to decide we're going to add a rule to our in-house team instance that simply blocks any and all stuff coming from any subdomain of facebook.com or facebook.net (we're not users of the "service" so there's no sacrifice in this... although it might not be practical for the broader cryptostorm member community). Done: problem solved, at least in this patch of terrain. Because why in Gaia's name should we be getting hit with an endless flood of complex, inscrutable, facebook (allegedly)-served scripts and fonts and so on when we don't even use the damned thing in the first place?

Knowing that the NSA - and almost certainly other spy orgs and <a href="http://hacking.technology">private net-munitions mercenaries</a> - target facebook scripts as masking cover for injected malware implant vectors, it's not hard to do the math: zero benefit from this "service" we don't use and don't have any legitimate interest or involvement with, balanced with the known risk/reality of its use as an injection vector for some seriously noxious malware toolkits... and it's not hard to see where the choice is for us.

When  it comes to *.facebook.com & *.facebook.net 3rd-party-insert scripts & other such internet chaff, the decision metric becomes...

Filter 'em all, and let The Source sort 'em out.

  ~ pj, on behalf of cryptostorm's network admin team

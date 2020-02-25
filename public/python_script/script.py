#!/usr/bin/env python 

import requests

s = requests.Session()

username = 'Default'
key='mLeUIQjQYw0sFmQvr6Rjwjo3VPRFZwtAeWof6Ieai3wPYvmPkD73Qdb2eBEeWd60ykrxhczmtJvtVxwPShYpYHoHCYRR5jJ1qi77C0rarPKxyowVhDgyIDrrASLaciT7ACjfUrW3l1Y20X0TdWoxj2sJH7qa6CSfY7OyJwb7uwW7Y38hwonyPGLK1FDsYZinH4w7ZxfJf1BUB2hpyOmo3RFZfLtW2HpCTtFt1PL7YyhIYyGWB3U6XMHYu6s7B1DS'
# Actually, key is 256 character-long

s.post(
    'http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=api/login',
    data={'username':username, 'key':key}
).text






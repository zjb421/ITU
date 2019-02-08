

---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: bug
assignees: ''

---

## Description
A few sentences describing the overall goals of the pull request's commits.

## Related PRs
List related PRs against other branches:

branch | PR
------ | ------
develop | [link]()
master | [link]()
release-yy-## | [link]()

## Todos
- [x] Checklist item describing completed technical detail
- [ ] Checklist item describing incomplete technical detail


## Deploy Notes
Notes regarding deployment the contained body of work.  These should note any
db migrations, etc.

#### Strings added
If you added any text in this pull request, list the .en.yml keys here and get approval from @elbrowno. 

Example:
`.otp_devices.otpapp.register_device: Register a new device`

## Steps to Test or Reproduce
Outline the steps to test or reproduce the PR here.

```sh
git pull --prune
git checkout <feature_branch>
bundle; script/server
```

1. Go to a route
2. Click a thing
3. Profit!!!

## Impacted Areas in Application
List general components of the application that this PR will affect:

* OTP Registration
* Provisioning
* UI

## References
Add any reference material:

#### Jira
* https://onelogin2.atlassian.net/browse/CORE-2109

#### Google Docs
* Link to any Google resources

